import Carousel from "./Crousel";
import "./styles.css";

export default function App() {
  const image = [
    "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3070333/pexels-photo-3070333.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1786306/pexels-photo-1786306.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1624388/pexels-photo-1624388.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4429333/pexels-photo-4429333.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Carousel using React and Framer Motion</h1>
      </header>
      <main>
        <Carousel images={image} />
      </main>
    </div>
  );
}
