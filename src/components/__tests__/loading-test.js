import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import Loading from '../loading';

describe('Loading', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('renders loading text', () => {
    const component = shallow(<Loading />);
    expect(component.text()).toContain('Loading...');
  });

});
