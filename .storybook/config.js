import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

// 04-2 스타일 적용할 때 사용된 파일
import '../src/sass/materialize.scss';
import '../src/doit-ui/app.css';

function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx$/);

  context.keys().forEach(srcFile => {
    interopRequireDefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
