import { renderHook, act } from "@testing-library/react-hooks";
import { AppContext } from "./appContext";
import { baseAppState } from "./appState";

import { useSetAppState } from "./hooks";

describe("useSetAppState", () => {
  it("should update app state correctly", () => {
    const setAppState = jest.fn((newState) => {
      console.log("newState", newState);
      baseAppState.generalState = { ...newState };
    });
    const wrapper = ({ children }) => (
      <AppContext.Provider value={{ appState: baseAppState, setAppState }}>
        {children}
      </AppContext.Provider>
    );

    const { result } = renderHook(() => useSetAppState(), { wrapper });

    const previousGeneralState = { ...baseAppState.generalState };
    act(() => {
      result.current({ isSidebarOpen: true });
    });

    expect(setAppState).toHaveBeenCalledTimes(1);
    expect(baseAppState.generalState).toEqual(
      expect.objectContaining({
        ...previousGeneralState,
        isSidebarOpen: true,
      }),
    );
  });
});
