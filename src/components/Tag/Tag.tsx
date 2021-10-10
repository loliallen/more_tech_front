import styled from "styled-components";

const TagBox = styled.a`
  padding: 4px 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  
  /* identical to box height, or 133% */

  font-feature-settings: "tnum" on, "lnum" on, "cv03" on, "cv04" on;

  /* Neutral / Neutral 90 */

  color: #22242a;
  background-color: #fff;
  text-decoration: none;
  border-radius: 14px;
`;

export const Tag: React.FC = ({ children }) => {
  return <TagBox href="/datasets?tag=">
      {children}
  </TagBox>;
};
