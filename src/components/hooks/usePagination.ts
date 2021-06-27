interface Props {
  count: number;
  page: number;
  boundaryCount?: number;
  siblingCount?: number;
}

function usePagination(props: Props) {
  const { count, page, boundaryCount = 2, siblingCount = 1 } = props;

  // https://dev.to/namirsab/comment/2050
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  );

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages[0] - 2
  );

  // Basic list of items to render
  // e.g. itemList = ['Prev', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next']

  const itemList = [
    ...["Prev"],
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ["end-ellipsis"]
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),

    ...endPages,
    ...["Next"],
  ];

  type ButtonType = "Prev" | "Next";
  // Map the button type to its page number
  const buttonPage = (type: ButtonType) => {
    switch (type) {
      case "Prev":
        return page - 1;
      case "Next":
        return page + 1;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map((item) => {
    return typeof item === "number"
      ? {
          type: "page",
          page: item,
          selected: item === page,
        }
      : {
          type: item,
          page: buttonPage(item as ButtonType),
          selected: false,
        };
  });

  return items;
}

export default usePagination;
