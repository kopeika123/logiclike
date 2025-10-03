import React from 'react';
import VoteButton from './VoteButton';
import {Idea} from "../interfaces/Idea";
import '../assets/IdeaList.scss';

interface IdeaListProps {
    ideas: Idea[];
    onVote: (ideaId: number) => void;
}

export default class IdeaList extends React.Component<IdeaListProps> {
    render() {
        const { ideas, onVote } = this.props;
        return (
            <div className="idea-list-container">
                <h1 className="idea-list-title">Голосуйте за идеи</h1>
                <div className="idea-list-grid">
                    {ideas.map(idea => (
                        <div key={idea.id} className="idea-card">
                            <h2 className="idea-title">{idea.title}</h2>
                            <p className="idea-description">{idea.description}</p>
                            <p className="idea-votes">Голоса: {idea.votes}</p>
                            <VoteButton onVote={() => onVote(idea.id)} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}