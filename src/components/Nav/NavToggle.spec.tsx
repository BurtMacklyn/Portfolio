import { NavToggle } from '@/components/Nav/NavToggle';
import { fireEvent } from '@testing-library/react';

describe('NavToggle', () => {
  it('renders', () => {
    const props = {
      clicked: false,
      setClicked: jest.fn(),
    };

    props.setClicked = jest.fn(() => (props.clicked = !props.clicked));

    const { element, unmount } = renderComponent(NavToggle, {
      test: {},
      props,
    });

    expect(props.clicked).toBeFalsy();
    fireEvent.click(element);
    expect(props.clicked).toBeTruthy();

    expect(props.setClicked).toBeCalled();

    unmount();
  });
});
