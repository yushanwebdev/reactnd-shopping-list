import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingForm from './ShoppingForm';
import DeleteButton from './DeleteButton';
import ShoppingItems from './ShoppingItems';

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = () => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<ShoppingForm addItem={this.addItem} />
		<DeleteButton list={this.state.items} deleteLastItem={this.deleteLastItem} />        

		<p className="items">Items</p>
        <ShoppingItems items={this.state.items} />
      </div>
    );
  }
}

export default App;
