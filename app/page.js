"use client";
import { Card } from "@/components/Card";
export default function Home() {
  const cardData = [
    {
      title: "Strengths",
      imageSrc: "/therapy.jpg",
      description:
        "Did you know that autistic people have certain abilities beyond the range experienced by neurotypicals?",
    },
    {
      title: "Creativity",
      imageSrc: "/1.jpg",
      description:
        "Creative minds often bring fresh perspectives and innovative solutions to problems.",
    },
    {
      title: "Resilience",
      imageSrc: "/2.jpg",
      description:
        "Building resilience allows individuals to thrive even in challenging circumstances.",
    },
    {
      title: "Empathy",
      imageSrc: "/3.jpeg",
      description:
        "Empathy enables deeper connections and understanding between people.",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {cardData.map((e, index) => (
        <Card key={index} data={e} />
      ))}
    </div>
  );
}
