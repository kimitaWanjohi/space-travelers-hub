import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from '../redux/store';
import Missions from "../components/Missions";

describe("Missions", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders a list of missions", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
