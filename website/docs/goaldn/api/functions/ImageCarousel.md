# Function: ImageCarousel()

> **ImageCarousel**\<`T`\>(`props`): `Element`

Defined in: [lib/layout/ImageCarousel.tsx:22](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/layout/ImageCarousel.tsx#L22)

A carousel component for displaying a series of images with navigation dots.
Supports parallax scrolling effect and customizable dimensions.

## Type Parameters

### T

`T` *extends* `ImageURISource`

The type of the image source

## Parameters

### props

The component props

#### height

`number`

Height of the carousel

#### images

`T`[]

Array of image sources to display

#### width?

`number` = `carouselWidth`

Width of the carousel, defaults to screen width

#### withDots?

`boolean` = `true`

Whether to show navigation dots

## Returns

`Element`

A carousel component with optional navigation dots
