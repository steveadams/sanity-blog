import React from 'react';
import Figure from './Figure';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {} from 'react-syntax-highlighter/dist/esm/styles/prism';

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: ({ node = {} }) => {
      const { code, language } = node;

      return (
        <SyntaxHighlighter language={language || 'text'} style={okaidia}>
          {code || ''}
        </SyntaxHighlighter>
      );
    }
  }
};

export default serializers;
