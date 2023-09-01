// LOD切换模式
const RangeMode = {
    Distance : 0,           // 距离模式:通过数据与相机的直线距离来调度显示不同LOD。
    Pixel : 1,              // 像素模式：
    GeometryError : 2       // 容差模式：
};

export default Object.freeze(RangeMode);