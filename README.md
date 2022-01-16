# intentional-css

## Positioning

<!-- prettier-ignore -->
```ts
// position: absolute | sticky
// left: x
// top: y
function pos(
  x: number | "left" | "center" | "right", 
  y: number | "top" | "center" | "bottom", 
  scroll?: boolean = false
);
```

```ts
// position: relative OR added to pos
// left: x
// top: y
// OR
// translate x y ?
function move(x: number, y: number);
```

## Text

```
text(bold italic underline)
font( _ )
```
