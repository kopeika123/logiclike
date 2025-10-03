import React from 'react';

interface VoteButtonProps {
    onVote: () => void;
}

export default class VoteButton extends React.Component<VoteButtonProps> {
    private handleClick() {
        this.props.onVote();
    }

    render() {
        return <button onClick={this.handleClick.bind(this)}>Ваш голос</button>;
    }
}