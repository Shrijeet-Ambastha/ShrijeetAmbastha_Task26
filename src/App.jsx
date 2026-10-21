import Card from './components/Card';
import './App.css';

const CARDS_DATA = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is card 1 description',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is card 2 description',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is card 3 description',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'This is card 4 description',
    image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&q=80',
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'This is card 5 description',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'This is card 6 description',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80',
  },
];

export default function App() {
  return (
    <div className="page-container">
      <h1 className="page-title">All the cards are here.</h1>
      <div className="cards-grid">
        {CARDS_DATA.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}