import React, { useEffect, useState } from 'react';
import { Idea } from "./interfaces/Idea";
import { ApiService } from "./services/ApiService";
import IdeaList from "./components/IdeaList";
import { BASE_URL } from "./constant";

const apiService = BASE_URL as unknown as ApiService;

const App: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadIdeas();
  }, []);

  const loadIdeas = async () => {
    try {
      const ideas = await apiService.fetchIdeas();
      setIdeas(ideas);
      setLoading(false);
    } catch (err) {
      setError('Не удалось загрузить идеи');
      setLoading(false);
    }
  };

  const handleVote = async (ideaId: number) => {
    try {
      await apiService.voteForIdea(ideaId);
      await loadIdeas();
    } catch (error: any) {
      alert(error?.response?.data?.error || 'Оштбка голосования');
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen text-lg">Загрузка...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-500 text-lg">Ошибка: {error}</div>;

  return (
      <div className="container mx-auto p-4">
        <IdeaList ideas={ideas} onVote={handleVote} />
      </div>
  );
};

export default App;
