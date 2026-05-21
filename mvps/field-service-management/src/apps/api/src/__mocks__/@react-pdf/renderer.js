'use strict';
module.exports = {
  Document: 'Document',
  Page: 'Page',
  View: 'View',
  Text: 'Text',
  Image: 'Image',
  StyleSheet: {
    create: (styles) => styles,
  },
  renderToBuffer: jest.fn().mockResolvedValue(Buffer.from('mock-pdf')),
};
