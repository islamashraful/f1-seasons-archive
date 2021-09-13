import { rest } from "msw";
import { server } from "../../../mocks/server";
import {
  render,
  waitFor,
  cleanup,
  fireEvent,
  screen,
} from "@testing-library/react";
import Archive from "../index";

afterEach(cleanup);

describe("Archive", () => {
  test("initially doesn't show any seasons", () => {
    const { queryByRole } = render(<Archive />);

    expect(queryByRole("list")).toBeNull();
  });

  test("load seasons after a while", async () => {
    const { getByRole } = render(<Archive />);

    const seasonList = await waitFor(() => getByRole("list"));

    expect(seasonList).not.toBeNull();
  });

  test("initially doesn't show races report", async () => {
    const { queryByRole } = render(<Archive />);

    expect(queryByRole("table")).toBeNull();
  });

  test("load all races for a season after clicking on a particular season", async () => {
    const { getByRole, getAllByRole } = render(<Archive />);

    // Click on the first season after getting season list
    const seasonListItems = await waitFor(() => getAllByRole("listitem"));
    fireEvent.click(seasonListItems[0]);

    const raceTable = await waitFor(() => getByRole("table"));
    expect(raceTable).not.toBeNull();
  });

  test("error response from server for getting seasons information", async () => {
    server.resetHandlers(
      rest.get(
        "http://ergast.com/api/f1/driverStandings/1.json",
        (_, res, ctx) => res(ctx.status(500))
      )
    );

    render(<Archive />);

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent(
      "An unexpected error occurred. Please try again later."
    );
  });
});
