import { NavModel, NavModelItem, NavIndex } from 'app/types';

function getNotFoundModel(): NavModel {
  var node: NavModelItem = {
    id: 'not-found',
    text: 'Page not found',
    icon: 'fa fa-fw fa-warning',
    subTitle: '404 Error',
    url: 'not-found',
  };

  return {
    node: node,
    main: node,
  };
}

export function getNavModel(navIndex: NavIndex, id: string): NavModel {
  if (navIndex[id]) {
    const node = navIndex[id];
    const main = {
      ...node.parentItem,
    };

    main.children = main.children.map(item => {
      return {
        ...item,
        active: item.url === node.url,
      };
    });

    return {
      node: node,
      main: main,
    };
  } else {
    return getNotFoundModel();
  }
}