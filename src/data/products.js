const products = [
  {
    id: 1,
    name: "Phones",
    price: 99.99,
    image:`${import.meta.env.BASE_URL}images/phones.jpg`,
    description:
      "Premium Phones with 50-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Watch and Smartphone",
    price: 249.99,
    image:`${import.meta.env.BASE_URL}images/watch_smartphone.jpg`,
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 249.99,
    image:`${import.meta.env.BASE_URL}images/laptop.jpg`,
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Gaming Laptop",
    price: 329.99,
    image:`${import.meta.env.BASE_URL}images/gaming_laptop.jpg`,
    description:
      "Gaming laptop is built with components that can support graphics-focused workloads.CPU and GPU are designed to handle rendering, fast movements, and visually detailed environments commonly found in modern games.",
  },
  {
    id: 5,
    name: "Gaming Phone",
    price: 139.99,
    image: `${import.meta.env.BASE_URL}images/gaming_phone.jpg`,
    description:
      "It is designed to handle intense gaming sessions with powerful hardware, smooth graphics, and special features. It is perfect for enthusiastic players by ensuring buttery-smooth gameplay, minimal lag, and responsive controls.",
  },
  {
    id: 6,
    name: "Tablet",
    price: 79.99,
    image:`${import.meta.env.BASE_URL}images/tablet.jpg`,
    description:
      "It is a portable electronic device that typically features a touch-sensitive screen and is used for various tasks, such as web browsing, watching videos, reading e-books, playing games, and running applications.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 59.99,
    image:`${import.meta.env.BASE_URL}images/monitor.jpg`,
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 39.99,
    image:`${import.meta.env.BASE_URL}images/webcam.jpg`,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}