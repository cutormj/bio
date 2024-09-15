"use client";
import * as React from "react";

const funFactsData = {
  funFacts: [
    { id: 1, fact: "I once backpacked through 10 countries in 3 months." },
    { id: 2, fact: "I'm a certified scuba diver." },
    { id: 3, fact: "I can speak 4 languages fluently." },
    { id: 4, fact: "I have a black belt in Taekwondo." },
    { id: 5, fact: "I can solve a Rubik's cube in under 2 minutes." },
    { id: 6, fact: "I love cooking, and I once hosted a dinner party for 20 people." },
    { id: 7, fact: "I've run a full marathon." },
  ],
};

export function FunFacts() {
  return (
    <div className="fun-facts-container">
      <h2 className="text-2xl font-bold mb-4">Fun Facts About Me</h2>
      <ul className="list-disc pl-5">
        {funFactsData.funFacts.map((fact) => (
          <li key={fact.id} className="mb-2 text-lg">
            {fact.fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
