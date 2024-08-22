import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from './mock.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);






