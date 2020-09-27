# 寵物地圖

![image](https://github.com/chihyux/apoption_map/blob/master/src/assets/image/pet_info.png)  
![image](https://github.com/chihyux/apoption_map/blob/master/src/assets/image/pet_info2.png)

- 串接政府 OPEN DATA
- index 載入開放認養寵物
- 搜尋寵物種類 / 地區
- lazy load animation

## Installing

1. clone this project
2. run npm i
3. npm run kao (development mode backend)
4. num start

## issue

infinite scroll problem  
the state changed but redux is firing the setState and the component redraws completely.  
so I need to start scrolling again but its add new data. When I reach waypoint again everything happens again, component fully rerenders and I need to scroll from top through more data.

![link](https://stackoverflow.com/questions/49462149/implementing-infinite-scroll-with-react-redux-and-react-waypoint-issue)solve:  
once you make another api request, in your action creator you set isLoading to true. this tells react to remove the whole photos component and then once it's set to false again react will show the new photos.

useEeffect not render at didmount

```
 useEffect(() => {
if (skip === 0) return
 dispatch(addData(top, skip))
 }, [dispatch, skip, top])
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
