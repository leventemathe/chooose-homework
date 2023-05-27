import { Card } from './Card';

export function CardList() {
  const cards = ['hello', 'world'];

  return (
    <>
      {cards.map((card) => (
        <Card key={card} card={card} />
      ))}
    </>
  );
}
