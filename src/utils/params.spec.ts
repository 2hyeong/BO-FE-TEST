import { describe, expect, it } from "vitest";
import { buildQueryString } from "./params";

describe("params", () => {
  it("if empty, buildQueryString should be return ?", () => {
    // given
    const given = {};
    const expected = "?";

    // when, then
    expect(buildQueryString(given)).toBe(expected);
  });
  it("if { filter: '필터' } is given, buildQueryString should be return ?filter=필터&", () => {
    // given
    const given = { filter: "필터" };
    const expected = "?filter=필터&";

    // when, then
    expect(buildQueryString(given)).toBe(expected);
  });

  it("if { filter: '필터', page: '페이지' } is given, buildQueryString should be return ?filter=필터&page=페이지&", () => {
    // given
    const given = { filter: "필터", page: "페이지" };
    const expected = "?filter=필터&page=페이지&";

    // when, then
    expect(buildQueryString(given)).toBe(expected);
  });

  it("if { page: '페이지' } is given, buildQueryString should be return ?page=페이지&", () => {
    // given
    const given = { page: "페이지" };
    const expected = "?page=페이지&";

    console.log(buildQueryString(given));

    // when, then
    expect(buildQueryString(given)).toBe(expected);
  });

  it(`if { page: '페이지', filter: "필터", q: "qs", pageOptions: "10"} is given,
    buildQueryString should be return ?filter=필터&q=qs&page=페이지&pageOptions=10&`, () => {
    // given
    const given = {
      page: "페이지",
      filter: "필터",
      q: "qs",
      pageOptions: "10",
    };
    const expected = "?filter=필터&q=qs&page=페이지&pageOptions=10&";

    console.log(buildQueryString(given));

    // when, then
    expect(buildQueryString(given)).toBe(expected);
  });
});
