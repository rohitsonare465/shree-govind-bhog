import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, '', '/');
  window.scrollTo = jest.fn();
  HTMLElement.prototype.scrollIntoView = jest.fn();
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
  document.head.innerHTML = '<meta name="description" content="" />';
});

test('selecting a bowl updates its description and selected state', () => {
  window.history.replaceState({}, '', '/menu');
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Warm Gulab Jamun', exact: true }));
  expect(screen.getByRole('button', { name: 'Warm Gulab Jamun', exact: true })).toHaveAttribute('aria-pressed', 'true');
  expect(document.querySelector('.dish-panel')).toHaveTextContent('rose-scented syrup');
});

test('staff menu edits persist and render on the public menu after reload', () => {
  window.history.replaceState({}, '', '/admin');
  const view = render(<App />);
  fireEvent.change(screen.getByLabelText('Dish name 1', { exact: true }), { target: { value: 'Seasonal Welcome Sharbat' } });
  fireEvent.click(screen.getByRole('button', { name: /Save today’s menu/ }));
  expect(JSON.parse(localStorage.getItem('sgb-dishes'))[0].name).toBe('Seasonal Welcome Sharbat');
  view.unmount();
  window.history.replaceState({}, '', '/menu');
  render(<App />);
  expect(screen.getByRole('button', { name: 'Seasonal Welcome Sharbat', exact: true })).toBeInTheDocument();
});

test('gallery filtering and lightbox display the selected category', () => {
  window.history.replaceState({}, '', '/gallery');
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Celebrations', exact: true }));
  expect(screen.queryByRole('button', { name: 'View A feast fit for royalty' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'View A table for your special moments' }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('heading', { name: 'A table for your special moments' })).toBeInTheDocument();
  fireEvent.click(within(dialog).getByRole('button', { name: 'Close dialog' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('sample reservation is stored locally, clearly marked unsent, and visible to staff', () => {
  window.history.replaceState({}, '', '/contact');
  const view=render(<App />);
  fireEvent.change(screen.getByLabelText('Guest Name'), { target:{ value:'Demo Guest' } });
  fireEvent.change(screen.getByLabelText('Mobile Number'), { target:{ value:'0000000000' } });
  fireEvent.change(screen.getByLabelText('Preferred Date'), { target:{ value:'2027-10-15' } });
  fireEvent.change(screen.getByLabelText('Preferred Time'), { target:{ value:'19:00' } });
  fireEvent.click(screen.getByRole('button', { name:'Send Reservation Request' }));
  expect(screen.getByText('Demo preview — no request has been sent.')).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem('sgb-enquiries'))[0].name).toBe('Demo Guest');
  view.unmount();
  window.history.replaceState({}, '', '/admin');
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name:/Enquiries/ }));
  expect(screen.getByRole('heading', { name:'Demo Guest' })).toBeInTheDocument();
});
