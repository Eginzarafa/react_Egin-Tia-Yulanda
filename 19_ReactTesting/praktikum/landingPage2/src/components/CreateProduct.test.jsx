import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form from "./Form";
import { Provider } from "react-redux";
import store from "../store";

test("Create Product Form", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Form />
      </MemoryRouter>
    </Provider>
  );

  const productName = screen.getByTitle("productName");
  expect(productName).toBeDefined();
  fireEvent.change(productName, { target: { value: "Egin Kelas D" } });

  const productCategory = screen.getByTitle("productCategory");
  expect(productCategory).toBeDefined();
  fireEvent.change(productCategory, { target: { value: "twoq" } });

  const optionB = screen.getByTitle("optionB");
  expect(optionB).toBeDefined();
  fireEvent.click(optionB);

  const radio0 = screen.getByTitle("radio0");
  expect(radio0).toBeDefined();
  fireEvent.click(radio0);

  const imageOfProduct = screen.getByTitle("imageOfProduct");
  expect(imageOfProduct).toBeDefined();
  fireEvent.change(imageOfProduct, {
    target: {
      files: [
        new File(["../../images/logo.png"], "logo.png", {
          type: "image/png",
        }),
      ],
    },
  });

  const additionalDesc = screen.getByTitle("additionalDesc");
  expect(additionalDesc).toBeDefined();
  fireEvent.change(additionalDesc, { target: { value: "Alterra Academy" } });

  const randomNumber = screen.getByTitle("randomNumber");
  expect(randomNumber).toBeDefined();
  fireEvent.click(randomNumber);

  const submit = screen.getByTitle("submit");
  expect(submit).toBeDefined();
  fireEvent.click(submit);
});
