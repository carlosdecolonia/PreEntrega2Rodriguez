const productos = [
    {
      "id": "hardware-01",
      "nombre": "Laptop Gaming",
      "precio": 1500,
      "stock": 10,
      "descripcion": "Potente laptop gaming con procesador Intel Core i7 y tarjeta gráfica NVIDIA GeForce RTX 3080.",
      "categoria": "Hardware",
      "imagen": "https://m.media-amazon.com/images/I/61BuT2yTQ6S._AC_SL1500_.jpg"
      
    },
    {
      "id": "hardware-02",
      "nombre": "Monitor UltraWide",
      "precio": 800,
      "stock": 15,
      "descripcion": "Monitor ultra panorámico de 34 pulgadas con resolución 3440x1440 y tecnología IPS.",
      "categoria": "Hardware",
      "imagen": "https://f.fcdn.app/imgs/a61f83/www.compupel.com.uy/coeluy/caa0/webp/catalogo/105014110501411/460x460/monitor-led-samsung-c24f390fhl-pantalla-curvada-24-pulgadas-full-hd-monitor-led-samsung-c24f390fhl-pantalla-curvada-24-pulgadas-full-hd.jpg"
    },
    {
      "id": "hardware-03",
      "nombre": "Teclado Mecánico",
      "precio": 100,
      "stock": 20,
      "descripcion": "Teclado mecánico retroiluminado con switches Cherry MX Red para una experiencia de escritura óptima.",
      "categoria": "Hardware",
      "imagen": "https://f.fcdn.app/imgs/d5afb3/www.zonatecno.com.uy/zoteuy/0da2/webp/catalogo/99068_99068_1/1500-1500/teclado-gamer-redragon-draconic-mecanico-rgb-black-teclado-gamer-redragon-draconic-mecanico-rgb-black.jpg"
    },
    {
      "id": "hardware-04",
      "nombre": "Mouse Gaming",
      "precio": 70,
      "stock": 25,
      "descripcion": "Mouse gaming con sensor óptico de alta precisión, 10 botones programables y retroiluminación RGB.",
      "categoria": "Hardware",
      "imagen": "https://cintegralads.b-cdn.net/wp-content/uploads/2024/01/MOUSE-INALAMBRICO-GENIUS-NX-7000-BLACK-600x600.jpg"
    },
    {
      "id": "hardware-05",
      "nombre": "Tarjeta Gráfica",
      "precio": 600,
      "stock": 8,
      "descripcion": "Tarjeta gráfica NVIDIA GeForce RTX 3060 Ti con 8 GB de memoria GDDR6 para juegos de alta calidad.",
      "categoria": "Hardware",
      "imagen": "https://www.profesionalreview.com/wp-content/uploads/2017/04/C%C3%B3mo-entender-las-especificaciones-de-la-tarjeta-gr%C3%A1fica-3.jpg"
    },
    {
      "id": "hardware-06",
      "nombre": "Disco SSD",
      "precio": 120,
      "stock": 30,
      "descripcion": "Disco de estado sólido de 1 TB de capacidad con interfaz SATA III para un rendimiento de almacenamiento rápido.",
      "categoria": "Hardware",
      "imagen": "https://djuv6ccs3wpor.cloudfront.net/images/thumbs/0050229_disco-solido-kingston-ssd-25-240gb-sata-iii-a400.jpeg"
    },
    {
      "id": "software-01",
      "nombre": "Licencia de Windows 10",
      "precio": 120,
      "stock": 20,
      "descripcion": "Licencia original de Windows 10 Pro con actualizaciones automáticas y características avanzadas.",
      "categoria": "Software",
      "imagen": "https://3clics.uy/images/stories/virtuemart/product/WIN10PN.png"
    },
    {
      "id": "software-02",
      "nombre": "Antivirus McAfee",
      "precio": 50,
      "stock": 50,
      "descripcion": "Antivirus McAfee Total Protection para protección completa contra virus, malware y ransomware.",
      "categoria": "Software",
      "imagen": "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202309/15/00128610761166____10__1200x1200.jpg"
    },
    {
      "id": "software-03",
      "nombre": "Microsoft Office 365",
      "precio": 100,
      "stock": 30,
      "descripcion": "Suite de productividad Microsoft Office 365 con Word, Excel, PowerPoint, Outlook y más.",
      "categoria": "Software",
      "imagen": "https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2021/01/Microsoft-Office-365.jpg"
    },
    {
      "id": "software-04",
      "nombre": "Adobe Photoshop",
      "precio": 300,
      "stock": 15,
      "descripcion": "Software de edición de imágenes Adobe Photoshop CC para diseño gráfico profesional.",
      "categoria": "Software",
      "imagen": "https://img-c.udemycdn.com/course/480x270/5346430_f677.jpg"
    },
    {
      "id": "software-05",
      "nombre": "Autodesk AutoCAD",
      "precio": 500,
      "stock": 10,
      "descripcion": "Software de diseño asistido por computadora (CAD) Autodesk AutoCAD para dibujo técnico 2D y modelado 3D.",
      "categoria": "Software",
      "imagen": "https://5.imimg.com/data5/CJ/JY/RR/SELLER-43556904/item-2356550-943.png"
    },
    {
      "id": "software-06",
      "nombre": "Adobe Premiere Pro",
      "precio": 400,
      "stock": 8,
      "descripcion": "Software de edición de video Adobe Premiere Pro CC para producción de video profesional.",
      "categoria": "Software",
      "imagen": "https://static.wixstatic.com/media/e524e1_9946dee7193949faacf682f1b27899fd~mv2.png/v1/fill/w_438,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e524e1_9946dee7193949faacf682f1b27899fd~mv2.png"
    },
    {
      "id": "accesorios-01",
      "nombre": "Funda para Portátil",
      "precio": 20,
      "stock": 50,
      "descripcion": "Funda acolchada para portátil de 15 pulgadas con compartimento adicional para accesorios.",
      "categoria": "Accesorios",
      "imagen": "https://www.mosca.com.uy/media/catalog/product/4/8/4841233.jpg"
    },
    {
      "id": "accesorios-02",
      "nombre": "Auriculares Inalámbricos",
      "precio": 80,
      "stock": 40,
      "descripcion": "Auriculares inalámbricos con cancelación de ruido y calidad de sonido premium.",
      "categoria": "Accesorios",
      "imagen": "https://f.fcdn.app/imgs/56857d/joacamar.com.uy/joacuy/4229/webp/catalogo/WH-CH520_BLK_1/2000-2000/auriculares-inalambricos-sony-wh-ch520-black.jpg"
    },
    {
      "id": "accesorios-03",
      "nombre": "Cable HDMI 4K",
      "precio": 10,
      "stock": 60,
      "descripcion": "Cable HDMI de alta velocidad compatible con resolución 4K y HDR para una calidad de imagen excepcional.",
      "categoria": "Accesorios",
      "imagen": "https://icase.uy/wp-content/uploads/2023/08/hoco-us03-hdmi-2-0-male-to-male-4k-hd-data-cable-3m.jpg"
    }
  ]


  //funcion que devuelve productos (promesa)
  export const getProductos = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay datos')
            }else{
            resolve(productos)
            }
            }, 1000)
        })
  }

  //funcion que va a mostrar el detalle de un item
  export const getOneProduct = (id) =>{
  return new Promise ((resolve, reject) =>{
    let error = false
    setTimeout (() =>{
      if(error){
        reject('El producto no existe')
      }else{
        let oneProduct = productos.find((prod) => prod.id === id)
        resolve(oneProduct)
      }
    },1000)
  })
}