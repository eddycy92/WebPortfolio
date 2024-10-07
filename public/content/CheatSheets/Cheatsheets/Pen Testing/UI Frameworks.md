## Bootstrap-React



## React



## Chakra UI - Layout and Alignment Guide

### **Installation**:

`npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion`

### **Breakpoints**:

Chakra UI provides responsive breakpoints for different screen sizes:

`base: 0px, sm: 30em, md: 48em, lg: 62em, xl: 80em, 2xl: 96em`

You can apply these in your components using responsive props.

---
# Modifiers By Component #

### Box:
#### 1. Width and Height:

- **`w` / `width`**: Set the width of a `Box`.
    
    `<Box w="100px" />`
    
- **`h` / `height`**: Set the height of a `Box`.
    
    `<Box h="200px" />`
    
- **Responsive example**:
    
    `<Box w={{ base: "100%", md: "50%" }} h={{ base: "200px", md: "400px" }} />`
    

---

#### 2. **Margin and Padding**:

- **`m` / `margin`**: Control the margin around the `Box`.
    

    `<Box m={4} />`
    
- **`p` / `padding`**: Control the padding inside the `Box`.
    
    
    `<Box p={4} />`
    
- **Responsive example**:
    
    
    `<Box p={{ base: 2, md: 6 }} />`
    

---

#### 3. **Text Alignment**:

- **`textAlign`**: Align the text inside the `Box`.
    
    `<Box textAlign="center">Centered Text</Box>`
    
- **Possible values**: `left`, `right`, `center`, `justify`
    

---

#### 4. **Display**:

- **`display`**: Set the display type of the `Box`.
    
    tsx
    
    Copy code
    
    `<Box display="flex" />`
    
- **Possible values**: `flex`, `grid`, `block`, `inline-block`, `none`
    

---

#### 5. **Background Color and Borders**:

- **`bg`**: Set the background color of the `Box`.
    
    tsx
    
    Copy code
    
    `<Box bg="teal.500" />`
    
- **`borderWidth`**: Add a border to the `Box`.
    
    tsx
    
    Copy code
    
    `<Box borderWidth="1px" />`
    
- **`borderRadius`**: Add rounded corners to the `Box`.
    
    tsx
    
    Copy code
    
    `<Box borderRadius="lg" />`
    

---

#### 6. **Alignment Inside the Box (When using `Flex`)**:

If the `Box` is using **`display="flex"`**, you can use the following alignment props:

- **`justifyContent`**: Align items horizontally inside the `Box`.
    

    
    `<Box display="flex" justifyContent="center" />`
    
- **`alignItems`**: Align items vertically inside the `Box`.
    
    tsx
    
    Copy code
    
    `<Box display="flex" alignItems="center" />`
    
- **`alignSelf`**: Align the `Box` itself inside its parent `Flex`.
    
    tsx
    
    Copy code
    
    `<Box alignSelf="center" />`
    

---

#### 7. **Box Shadows and Shadows**:

- **`shadow`**: Apply box shadows.
    
    tsx
    
    Copy code
    
    `<Box shadow="lg" />`
    

---

#### 8. **Responsive Visibility**:

- **`visibility`**: Control the visibility of the `Box`.
    
    tsx
    
    Copy code
    
    `<Box visibility="hidden" />`
    
- **`display`**: Show or hide the `Box` based on screen size.
    
    tsx
    
    Copy code
    
    `<Box display={{ base: "none", md: "block" }} />`
    

---

### Example Usage of `Box`:

tsx

Copy code

`<Box   w="300px"   h="200px"   p={4}   bg="gray.100"   borderWidth="1px"   borderRadius="lg"   shadow="md"   display="flex"   justifyContent="center"   alignItems="center"   textAlign="center" >   Centered Content </Box>`

This example creates a `Box` with width, height, padding, background color, border, shadow, and centered content.




### **Key Alignment Techniques**


#### 1. **Horizontal Alignment**:




- ### justifyContent  (in `Flex` and `Grid`):
    
    **Values**:
    - `center`: Center items
    - `flex-start`: Align items to the start
    - `flex-end`: Align items to the end
    - `space-between`: Space items evenly with gaps between them
    - `space-around`: Space items with gaps around them
    
    **Example**:
	```
	<Flex justifyContent="center">
		<Box>Item 1</Box>   
		<Box>Item 2</Box>
	</Flex>
	```
    
	

**`textAlign`** (for text): Aligns text within `Box`, `Text`, or inline elements.
    
    **Values**: `left`, `right`, `center`, `justify`
    
    **Example**:
    
    tsx
    
    Copy code
    
    `<Text textAlign="center">Centered Text</Text>`
    
- **`justifySelf`** (for `Grid`): Aligns individual grid items horizontally.
    
    **Example**:
    
    tsx
    
    Copy code
    
    `<Grid templateColumns="1fr 1fr">   <Box justifySelf="center">Centered</Box> </Grid>`
    

#### 2. **Vertical Alignment**:

- **`alignItems`** (in `Flex` and `Grid`): Aligns items vertically.
    
    **Values**:
    
    - `center`: Center items
    - `flex-start`: Align items to the top
    - `flex-end`: Align items to the bottom
    - `stretch`: Stretch items to fill the container
    
    **Example**:
    
    tsx
    
    Copy code
    
    `<Flex alignItems="center" h="200px">   <Box>Vertically Centered</Box> </Flex>`
    
- **`alignSelf`** (for individual items in `Flex` or `Grid`): Aligns an individual item vertically.
    
    **Example**:
    
    tsx
    
    Copy code
    
    `<Flex>   <Box alignSelf="start">Top</Box>   <Box alignSelf="center">Center</Box>   <Box alignSelf="end">Bottom</Box> </Flex>`
    

---

### **Horizontal & Vertical Centering**

To center elements both horizontally and vertically, use a combination of `justifyContent` and `alignItems` for **Flex**, or `placeItems` for **Grid**.

#### **Centering with Flex**:

tsx

Copy code

`<Flex justifyContent="center" alignItems="center" h="100vh">   <Box>Centered Box</Box> </Flex>`

#### **Centering with Grid**:

tsx

Copy code

`<Grid placeItems="center" h="100vh">   <Box>Centered Box</Box> </Grid>`

---

### **Responsive and Utility Props**

Chakra UI allows for responsive styling using shorthand props for margin, padding, width, height, and more.

#### 1. **Responsive Width and Height**:

tsx

Copy code

`<Box w={{ base: "100%", md: "50%" }} h={{ base: "200px", md: "400px" }} bg="tomato" />`

#### 2. **Padding and Margin**:

tsx

Copy code

`<Box p={4} m={4} bg="tomato">Content</Box> <Box p={{ base: 2, md: 6 }}>Responsive Padding</Box>`

#### 3. **Display & Visibility**:

tsx

Copy code

`<Box display="flex" justifyContent="center" alignItems="center">   <Text>Centered Text</Text> </Box>  <Box display={{ base: "none", md: "block" }}>Visible on md and up</Box>`

---

### **Flexbox & Grid Utility Summary**

|Prop|Description|
|---|---|
|`justifyContent`|Horizontally aligns items in `Flex` or `Grid`.|
|`alignItems`|Vertically aligns items in `Flex` or `Grid`.|
|`placeItems`|Short-hand for centering in `Grid`.|
|`textAlign`|Aligns text inside `Text` or `Box`.|
|`alignSelf`|Vertically aligns an individual item.|
|`justifySelf`|Horizontally aligns an individual item.|

---

### **Example Usage**

#### Centering Text and Boxes in Flex:

tsx

Copy code

`<Flex justifyContent="center" alignItems="center" h="200px" bg="gray.100">   <Text>Centered Content</Text> </Flex>`

#### Responsive Grid Layout:

tsx

Copy code

`<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>   <Box bg="tomato">Item 1</Box>   <Box bg="blue">Item 2</Box>   <Box bg="green">Item 3</Box> </Grid>`

---

### **Color and Background Utilities**

Use Chakra’s built-in colors for backgrounds, borders, and text:

tsx

Copy code

`<Box bg="teal.500">Teal Background</Box> <Box color="white" bg="blue.500">White text on blue background</Box>`

### **Box Shadows and Borders**

tsx

Copy code

`<Box shadow="md" borderWidth="1px" borderRadius="lg" p={4}>   Box with shadow and border </Box>`

---

This concise guide should help you easily understand how to align and style elements using **Chakra UI** components like **Box**, **Flex**, **Grid**, and **Text**. Let me know if you need further details on specific usage.