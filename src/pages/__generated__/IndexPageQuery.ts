/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_posts_nodes_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface IndexPageQuery_posts_nodes_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
  date: any | null;
}

export interface IndexPageQuery_posts_nodes {
  __typename: "MarkdownRemark";
  id: string;
  fields: IndexPageQuery_posts_nodes_fields | null;
  html: string | null;
  frontmatter: IndexPageQuery_posts_nodes_frontmatter | null;
}

export interface IndexPageQuery_posts {
  __typename: "MarkdownRemarkConnection";
  nodes: IndexPageQuery_posts_nodes[];
}

export interface IndexPageQuery {
  __typename: "Query";
  posts: IndexPageQuery_posts | null;
}
