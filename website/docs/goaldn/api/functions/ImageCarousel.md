# Function: ImageCarousel()

> **ImageCarousel**\<`T`\>(`props`): `Element`

Defined in: [goaldn/lib/components/ui/custom/image-carousel.tsx:21](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/ui/custom/image-carousel.tsx#L21)

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
