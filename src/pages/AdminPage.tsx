import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient'; 

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [tones, setTones] = useState('');
  const [tag, setTag] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubirProducto = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (!imageFile) {
        throw new Error('Por favor, selecciona una imagen para el producto.');
      }

      // 1. Subir la imagen a Supabase Storage (Bucket: product-images)
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      // 2. Obtener la URL pública de la foto guardada
      const { data: publicUrlData } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      const imageUrl = publicUrlData.publicUrl;

      // 3. Insertar el registro con tus columnas reales de Supabase
      const { error: insertError } = await supabase
        .from('products') 
        .insert([
          {
            title: title,
            price: price.includes('$') ? price : `${price}$`, // Mantiene tu formato de texto con "$"
            description: description,
            image: imageUrl, // Guarda la URL en tu columna 'image'
            tones: tones ? tones : null,
            tag: tag ? tag : null,
            ingredients: ingredients ? ingredients : null,
            color: 'bg-brand-wheat' // Le asignamos un color base de los tuyos por defecto
          }
        ]);

      if (insertError) throw insertError;

      setMessage('¡Producto y foto guardados con total éxito en Supabase! 🎁🎉');
      
      // Limpiar cajas del formulario para el siguiente producto
      setTitle('');
      setPrice('');
      setDescription('');
      setTones('');
      setTag('');
      setIngredients('');
      setImageFile(null);

    } catch (error: any) {
      setMessage(`Error: ${error.message || error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h2>Panel de Administración - Un Té con Daniela</h2>
      <p style={{ color: '#666' }}>Sube productos e imágenes en tiempo real directamente a Supabase sin tocar código.</p>
      
      {message && (
        <div style={{ padding: '15px', backgroundColor: message.includes('Error') ? '#ffdee3' : '#e2fbe7', borderRadius: '5px', marginBottom: '20px', fontWeight: 'bold' }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubirProducto} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <strong>Nombre del Producto (title):</strong>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <strong>Precio (ej: 6.5$ o 12,00$):</strong>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required placeholder="6.5$" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <strong>Subtítulo / Etiqueta corta (tag):</strong>
          <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Ej: Limpieza profunda / Hidratante" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <strong>Descripción:</strong>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '60px' }} />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <strong>Ingredientes (ingredients):</strong>
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Aceite de oliva, manteca de cacao..." style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '50px' }} />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <strong>Tonos / Variantes (Separados por comas):</strong>
          <input type="text" value={tones} onChange={(e) => setTones(e.target.value)} placeholder="Almendra, Maní, Cacao (Dejar vacío si no aplica)" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <strong>Imagen Real del Producto:</strong>
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)} required />
        </label>

        <button type="submit" disabled={loading} style={{ padding: '12px 15px', backgroundColor: '#9061f9', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
          {loading ? 'Subiendo archivos a Supabase...' : 'Guardar Producto Real'}
        </button>
      </form>
    </div>
  );
}