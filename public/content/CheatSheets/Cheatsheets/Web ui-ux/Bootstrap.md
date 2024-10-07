#### 1. **Containers and Layouts**

| Class            | Definition                                                                                  | Notes                                                              |
| ---------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `.container-xl`  | A responsive fixed-width container for screens ≥1200px.                                     | Ideal for large screen layouts where additional width is required. |
| `.container-xxl` | A responsive fixed-width container for screens ≥1400px.                                     | Suitable for ultra-large screens and high-resolution layouts.      |
| `.g-0` to `.g-5` | Controls gutter spacing between grid items. Range from 0 (no gutter) to 5 (largest gutter). | Useful for fine-tuning the spacing between grid columns.           |

#### 2. **Grid System (Rows and Columns)**

|Class|Definition|Notes|
|---|---|---|
|`.row`|A row that contains columns in the Bootstrap grid system.|Use inside a `.container` or `.container-fluid` to align columns.|
|`.col`, `.col-{size}`|A column inside a `.row`. Adjusts based on screen size or specific sizes like `.col-md-6`.|Use `.col-auto` for content-driven widths or `.col-6` for 50% width columns.|
|`.order-{value}`|Controls the order of columns. Values range from 0 to 12.|Useful for changing column order on different screen sizes.|

#### 3. **Tables**

|Class|Definition|Notes|
|---|---|---|
|`.table`|Adds basic styling to a table.|Combine with `.table-striped`, `.table-bordered`, etc., for additional styles.|
|`.table-striped`|Adds zebra-striping to a table for better readability.|Works well with tables containing large amounts of data.|
|`.table-hover`|Adds a hover effect to table rows.|Enhances user experience by highlighting rows on hover.|
|`.table-sm`|Makes the table more compact by reducing padding in cells.|Useful for dense data tables.|

#### 4. **Typography**

|Class|Definition|Notes|
|---|---|---|
|`.text-truncate`|Truncates text with an ellipsis if it overflows the container.|Commonly used for displaying previews or summaries of text content.|
|`.font-monospace`|Applies a monospace font to text.|Useful for displaying code snippets or technical content.|
|`.fst-italic`, `.fst-normal`|Adds or removes italics from text.|`.fst-italic` makes text italic, `.fst-normal` resets it to normal.|
|`.fw-bold`, `.fw-light`, `.fw-normal`|Controls font weight.|`.fw-bold` makes text bold, `.fw-light` makes it lighter, `.fw-normal` resets to normal weight.|

#### 5. **Padding Classes (p)**

|Class|Definition|
|---|---|
|`.p-{value}`|Applies padding on all sides.|
|`.pt-{value}`|Applies padding on the top.|
|`.pr-{value}`|Applies padding on the right.|
|`.pb-{value}`|Applies padding on the bottom.|
|`.pl-{value}`|Applies padding on the left.|
|`.px-{value}`|Applies padding on the x-axis.|
|`.py-{value}`|Applies padding on the y-axis.|

#### 6. **Margin Classes (m)**

|Class|Definition|
|---|---|
|`.m-{value}`|Applies margin on all sides.|
|`.mt-{value}`|Applies margin on the top.|
|`.mr-{value}`|Applies margin on the right.|
|`.mb-{value}`|Applies margin on the bottom.|
|`.ml-{value}`|Applies margin on the left.|
|`.mx-{value}`|Applies margin on the x-axis.|
|`.my-{value}`|Applies margin on the y-axis.|

#### 7. **Negative Margin Classes (m)**

|Class|Definition|
|---|---|
|`.m-n{value}`|Applies negative margin on all sides.|
|`.mt-n{value}`|Applies negative margin on the top.|
|`.mr-n{value}`|Applies negative margin on the right.|
|`.mb-n{value}`|Applies negative margin on the bottom.|
|`.ml-n{value}`|Applies negative margin on the left.|
|`.mx-n{value}`|Applies negative margin on the x-axis.|
|`.my-n{value}`|Applies negative margin on the y-axis.|

#### 8. **Spacing Values**

|Value|Definition|
|---|---|
|`0`|0 (no padding or margin)|
|`1`|0.25rem (4px)|
|`2`|0.5rem (8px)|
|`3`|1rem (16px)|
|`4`|1.5rem (24px)|
|`5`|3rem (48px)|
|`auto`|Automatically set the margin to evenly distribute space between elements (only applies to margin, e.g., `.ml-auto`, `.mr-auto`, `.mx-auto`).|

#### 9. **Flexbox Utilities**

|Class|Definition|Notes|
|---|---|---|
|`.d-flex`|Applies display: flex to an element, enabling the use of flexbox layout features.|Foundational class for creating flexible, responsive layouts.|
|`.flex-column`|Aligns flex items in a vertical column.|Ideal for stacking elements vertically within a flex container.|
|`.align-items-center`|Vertically aligns flex items along the center.|Useful for centering content within a flex container.|

## Carousel

#### **Core Structure**

- **`.carousel`**: The main wrapper for the entire carousel component.
- **`.carousel-inner`**: The container that holds all the slides.
- **`.carousel-item`**: Defines each slide within the carousel. Use `.active` on one item to make it visible initially.
- **`.carousel-caption`**: Adds captions within any slide (`.carousel-item`).

#### **Navigation Controls**

- **`.carousel-control-prev`**: The button for moving to the previous slide.
- **`.carousel-control-next`**: The button for moving to the next slide.
- **`.carousel-control-prev-icon`**: Icon for the previous button.
- **`.carousel-control-next-icon`**: Icon for the next button.

#### **Indicators**

- **`.carousel-indicators`**: The container for slide indicators (dots).
- **`.active`**: Marks the currently active slide or indicator.

#### **Transition Classes**

- **`.carousel-fade`**: Adds a fade transition effect between slides.

#### **Additional Modifiers**

- **`.carousel-dark`**: Applies a darker theme to controls, indicators, and captions.

#### **Utility Classes**

- **`.d-block`**: Ensures the item is displayed as a block-level element.
- **`.w-100`**: Ensures slides or images occupy the full width of their container.

#### **Data Attributes**

- **`data-bs-ride="carousel"`**: Automatically starts the carousel when the page loads.
- **`data-bs-slide-to`**: Defines the index of the slide to display.
- **`data-bs-slide="prev" | "next"`**: Moves to the previous or next slide.

#### **JavaScript Methods**

- **`bootstrap.Carousel.getInstance(element)`**: Retrieves the carousel instance associated with a specific DOM element.
- **`carouselInstance.next()`**: Manually advances to the next slide.
- **`carouselInstance.prev()`**: Manually goes to the previous slide.
- **`carouselInstance.pause()`**: Pauses the carousel from cycling through slides.
- **`carouselInstance.cycle()`**: Resumes cycling through slides.

#### **Events**

- **`slide.bs.carousel`**: Triggered when a carousel slide begins.
- **`slid.bs.carousel`**: Triggered when a carousel has finished sliding to a new item.

### **Carousel Variables**

Here are the key Sass variables you can customize to modify the appearance and behavior of the carousel:

|Variable|Default Value|Description|
|---|---|---|
|`$carousel-control-color`|`$white`|Color of the carousel controls.|
|`$carousel-control-width`|`15%`|Width of the carousel controls.|
|`$carousel-control-opacity`|`0.5`|Opacity of the carousel controls.|
|`$carousel-control-hover-opacity`|`0.9`|Opacity of the carousel controls on hover.|
|`$carousel-control-transition`|`opacity .15s ease`|Transition effect for carousel controls.|
|`$carousel-indicator-width`|`30px`|Width of the carousel indicators.|
|`$carousel-indicator-height`|`3px`|Height of the carousel indicators.|
|`$carousel-indicator-hit-area-height`|`10px`|Height of the clickable area for carousel indicators.|
|`$carousel-indicator-spacer`|`3px`|Spacing between carousel indicators.|
|`$carousel-indicator-opacity`|`0.5`|Opacity of the carousel indicators.|
|`$carousel-indicator-active-bg`|`$white`|Background color of the active carousel indicator.|
|`$carousel-indicator-active-opacity`|`1`|Opacity of the active carousel indicator.|
|`$carousel-indicator-transition`|`opacity .6s ease`|Transition effect for carousel indicators.|
|`$carousel-caption-width`|`70%`|Width of the carousel caption.|
|`$carousel-caption-color`|`$white`|Color of the carousel caption text.|
|`$carousel-caption-padding-y`|`1.25rem`|Vertical padding of the carousel caption.|
|`$carousel-caption-spacer`|`1.25rem`|Spacing between carousel caption elements.|
|`$carousel-control-icon-width`|`2rem`|Width of the carousel control icons.|
|`$carousel-control-prev-icon-bg`|URL with SVG path (previous control icon)|Background image for the previous control icon.|
|`$carousel-control-next-icon-bg`|URL with SVG path (next control icon)|Background image for the next control icon.|
|`$carousel-transition-duration`|`0.6s`|Duration of the carousel transition effect.|
|`$carousel-transition`|`transform $carousel-transition-duration ease-in-out`|Transition effect for carousel items.|
#### 11. **Color Utilities**

|Class|Definition|
|---|---|
|`.text-primary`|Applies primary color to text.|
|`.text-secondary`|Applies secondary color to text.|
|`.text-success`|Applies success (green) color to text.|
|`.text-danger`|Applies danger (red) color to text.|
|`.text-warning`|Applies warning (yellow) color to text.|
|`.text-info`|Applies info (blue) color to text|