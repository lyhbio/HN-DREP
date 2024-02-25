import { SpinProps } from 'antd';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { LoadingComponents } from './Loading';

const container = document.getElementById('root');

let root = container ? createRoot(container) : null;

export const loading = {
  isLoading: false,

  start(options: SpinProps = {}) {
    if (loading.isLoading) {
      return;
    }

    loading.isLoading = true;

    if (root) {
      root.render(
        <React.StrictMode>
          <LoadingComponents {...options} />
        </React.StrictMode>,
      );
    }
  },

  end() {
    const loadingElement = document.getElementById('comp-loading-container');
    if (loadingElement) {
      document.body.removeChild(loadingElement);
    }
    loading.isLoading = false;
  },
};
