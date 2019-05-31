/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UseBlogPostsQuery
// ====================================================

export interface UseBlogPostsQuery_allMarkdownRemark_nodes_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
  date: any | null;
}

export interface UseBlogPostsQuery_allMarkdownRemark_nodes {
  __typename: "MarkdownRemark";
  frontmatter: UseBlogPostsQuery_allMarkdownRemark_nodes_frontmatter | null;
  excerpt: string | null;
}

export interface UseBlogPostsQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  nodes: UseBlogPostsQuery_allMarkdownRemark_nodes[];
  totalCount: number;
}

export interface UseBlogPostsQuery {
  allMarkdownRemark: UseBlogPostsQuery_allMarkdownRemark | null;
}
