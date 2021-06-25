import { useMemo, ChangeEvent } from "react";
import styled from "styled-components";

import { Product, useProducts } from "../../api";
import { useAppDispatch } from "../../app/hooks";
import { addTag, removeTag } from "../../app/reducers/tagsFilter";
import searchFilter from "../../utils/searchFilter";

interface Props {
  searchTerm: string;
}

const constructTags = (products: Product[]) => {
  const _tags: { [tagName: string]: number } = {};

  products.forEach((product) => {
    product.tags.forEach((tag) => {
      if (tag in _tags) _tags[tag]++;
      else _tags[tag] = 1;
    });
  });

  const tags: [tagName: string, numberOfItems: number][] = [];
  Object.entries(_tags).forEach((tagRecord) => tags.push(tagRecord));

  const tagsWithAll = [
    ["__ALL__", products.length] as [string, number],
    ...tags,
  ];

  // sort the tags array by the number of products they associate with
  tagsWithAll.sort(([, a], [, b]) => b - a);

  return tagsWithAll;
};

function TagList({ searchTerm }: Props) {
  const products = useProducts();
  const tags = useMemo(() => constructTags(products), [products]);
  const dispatch = useAppDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    tagName: string
  ) => {
    if (event.target.checked === true) {
      dispatch(addTag(tagName));
    } else {
      dispatch(removeTag(tagName));
    }
  };

  return (
    <Container>
      {tags
        .filter(([tagName]) => searchFilter(tagName, searchTerm))
        .map(([tagName, count]) => (
          <CheckboxLabel key={tagName}>
            <input
              type="checkbox"
              onChange={(e) => handleChange(e, tagName)}
              defaultChecked={tagName === "__ALL__"}
            />
            <span>
              {tagName === "__ALL__" ? "All" : tagName}{" "}
              <Count>{`(${count})`}</Count>
            </span>
          </CheckboxLabel>
        ))}
    </Container>
  );
}

export default TagList;

const Container = styled.div`
  height: 8rem;
  margin-top: 1rem;
  overflow-y: scroll;
`;

const CheckboxLabel = styled.label`
  display: block;
  color: #525252;
  margin-bottom: 1rem;

  & > span {
    margin-left: 1rem;
  }

  & > input {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Count = styled.span`
  color: #a8a8a8;
`;
