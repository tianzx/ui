export const initialState = {
  currentIndex: 0,
  items: menus,
  navpath: []
};
export const menus = [
  {
    key: 1,
    name: 'Dashboard',
    icon: 'user',
    child: [
      {
        name: '电子围栏',
        key: 101,
        url: 'fence'
      },
      {
        name: '用户',
        key: 102,
        url: 'user'
      },
      {
        name: '谷歌地图',
        key: 103,
        url: 'map'
      },
      {
        name: '选项4',
        key: 104
      }
    ]
  },
  {
    key: 2,
    name: '导航二',
    icon: 'laptop',
    child: [
      {
        name: '选项5',
        key: 201
      },
      {
        name: '选项2',
        key: 202
      },
      {
        name: '选项3',
        key: 203
      },
      {
        name: '选项4',
        key: 204
      }
    ]
  }
]
