import React from 'react';
import renderer from 'react-test-renderer';
import  Albums  from '../albums/albums';


it('renders correctly when there are no albums', () => {
    const tree = renderer
    .create(<Albums />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });