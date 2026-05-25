import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  tag?: string;
  ingredients?: string;
  tones?: string;
  image: string;
}

export default function AdminPage() {
  // Lista de productos cargados desde Supabase
  const [products, setProducts] = useState<Product[]>([]);

  // Estados del Formulario
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [tones, setTones] = useState("");
  const [tag, setTag] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Estado para saber si estamos editando o creando
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Cargar productos al abrir la página
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) {
      setProducts(data);
    }
  };

  const handleLimpiarFormulario = () => {
    setTitle("");
    setPrice("");
    setDescription("");
    setTones("");
    setTag("");
    setIngredients("");
    setImageFile(null);
    setEditingProductId(null);
    setExistingImageUrl("");
  };

  const handleSubirOGuardarProducto = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let finalImageUrl = existingImageUrl;

      // 1. Si el usuario seleccionó una nueva foto, la subimos
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(filePath);

        finalImageUrl = publicUrlData.publicUrl;
      } else if (!editingProductId) {
        // Si estamos creando un producto nuevo, la foto es obligatoria
        throw new Error("Por favor, selecciona una imagen para el producto.");
      }

      const productData = {
        title,
        price: price.includes("$") ? price : `${price}$`,
        description,
        image: finalImageUrl,
        tones: tones ? tones : null,
        tag: tag ? tag : null,
        ingredients: ingredients ? ingredients : null,
        color: "bg-brand-wheat",
      };

      if (editingProductId) {
        // MODO EDITAR: Usamos el ID único para actualizar la fila exacta
        const { error: updateError } = await supabase
          .from("products")
          .update(productData)
          .eq("id", editingProductId);

        if (updateError) throw updateError;
        setMessage("¡Producto actualizado con éxito! 🔄");
      } else {
        // MODO CREAR: Insertamos una nueva fila
        const { error: insertError } = await supabase
          .from("products")
          .insert([productData]);

        if (insertError) throw insertError;
        setMessage("¡Nuevo producto guardado con éxito! 🎉");
      }

      handleLimpiarFormulario();
      fetchProducts(); // Refrescar la tabla
    } catch (error: any) {
      setMessage(`Error: ${error.message || error}`);
    } finally {
      //  ¡Cambia 'catchError' por 'finally'!
      setLoading(false);
    }
  };

  // Activa el modo edición cargando los datos del producto en el formulario
  const handleActivarEdicion = (product: Product) => {
    setEditingProductId(product.id);
    setTitle(product.title);
    setPrice(product.price.replace("$", "")); // Limpia el signo para el input
    setDescription(product.description);
    setTag(product.tag || "");
    setIngredients(product.ingredients || "");
    setTones(product.tones || "");
    setExistingImageUrl(product.image);
    setMessage(`Editando el producto con ID: ${product.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Sube la pantalla al formulario
  };

  // Elimina un producto usando su ID único
  const handleEliminarProducto = async (id: number, title: string) => {
    const confirmar = window.confirm(
      `¿Estás completamente segura de eliminar "${title}"? Esta acción no se puede deshacer.`,
    );
    if (!confirmar) return;

    try {
      const { error } = await supabase.from("products").delete().eq("id", id);

      if (error) throw error;

      setMessage("Producto eliminado correctamente. 🗑️");
      fetchProducts(); // Actualizar la lista
    } catch (error: any) {
      setMessage(`Error al eliminar: ${error.message}`);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h2>Dashboard de Inventario - Un Té con Daniela</h2>
      <p style={{ color: "#666" }}>
        {editingProductId
          ? `Estás editando el Producto ID: ${editingProductId}`
          : "Agrega, edita o elimina productos en tiempo real."}
      </p>

      {message && (
        <div
          style={{
            padding: "15px",
            backgroundColor: message.includes("Error") ? "#ffdee3" : "#e2fbe7",
            borderRadius: "5px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          {message}
        </div>
      )}

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubirOGuardarProducto}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #eee",
        }}
      >
        <h3>
          {editingProductId
            ? "📝 Modificar Datos del Producto"
            : "✨ Agregar Nuevo Producto"}
        </h3>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <strong>Nombre del Producto:</strong>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <div style={{ display: "flex", gap: "15px" }}>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              flex: 1,
            }}
          >
            <strong>Precio (ej: 6.5):</strong>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              flex: 1,
            }}
          >
            <strong>Etiqueta / Tag:</strong>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Ej: Hidratante"
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <strong>Descripción:</strong>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minHeight: "60px",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <strong>Ingredientes:</strong>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minHeight: "50px",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <strong>Tonos / Variantes (Separados por comas):</strong>
          <input
            type="text"
            value={tones}
            onChange={(e) => setTones(e.target.value)}
            placeholder="Almendra, Cacao"
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <strong>Imagen del Producto:</strong>
          {editingProductId && (
            <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
              Dejar vacío para conservar la foto actual.
            </p>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(e.target.files ? e.target.files[0] : null)
            }
            required={!editingProductId}
          />
        </label>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              flex: 2,
              padding: "12px",
              backgroundColor: editingProductId ? "#2563eb" : "#9061f9",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {loading
              ? "Procesando en Supabase..."
              : editingProductId
                ? "Actualizar Cambios"
                : "Guardar Producto"}
          </button>

          {editingProductId && (
            <button
              type="button"
              onClick={handleLimpiarFormulario}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#ef4444",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* TABLA DE PRODUCTOS ACTUALES */}
      <h3 style={{ marginTop: "40px" }}>
        📦 Catálogo Actual en Supabase ({products.length} productos)
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "15px",
          textAlign: "left",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#f3f4f6",
              borderBottom: "2px solid #e5e7eb",
            }}
          >
            <th style={{ padding: "10px" }}>ID</th>
            <th style={{ padding: "10px" }}>Producto</th>
            <th style={{ padding: "10px" }}>Precio</th>
            <th style={{ padding: "10px", textAlign: "center" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{ padding: "10px", fontWeight: "bold", color: "#666" }}
              >
                {prod.id}
              </td>
              <td style={{ padding: "10px" }}>
                <div style={{ fontWeight: "bold" }}>{prod.title}</div>
                <span style={{ fontSize: "12px", color: "#888" }}>
                  {prod.tag || "Sin etiqueta"}
                </span>
              </td>
              <td style={{ padding: "10px" }}>{prod.price}</td>
              <td
                style={{
                  padding: "10px",
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => handleActivarEdicion(prod)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#3b82f6",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminarProducto(prod.id, prod.title)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#dc2626",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
