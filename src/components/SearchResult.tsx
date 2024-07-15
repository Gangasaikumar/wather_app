import { Button, Modal } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

const SearchResult = (props: {
  searchResult: Array<object>;
  getWeatherData: (latitude: number, longitude: number) => void;
  setSearchResultModel(arg0: boolean): void;
  serch_result_model: (() => void) | undefined;
  showSerchResultModel: boolean | undefined;
  loading: boolean | undefined;
  inputLocation:
    | string
    | number
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <Modal
      title={
        <p>
          Serching result for `
          <span className="text-yellow-500">{props.inputLocation} </span>`
        </p>
      }
      footer={
        <Button type="primary" onClick={props.serch_result_model}>
          Reload
        </Button>
      }
      loading={props.loading}
      open={props.showSerchResultModel}
      onCancel={() => props.setSearchResultModel(false)}
    >
      {props.searchResult && props.searchResult.length > 0 ? (
        props.searchResult.map((eachOne: any) => (
          <div
            className="bg-yellow-50 my-2 p-5 cursor-pointer flex items-center hover:text-yellow-600 hover:bg-yellow-100"
            onClick={() => {
              props.setSearchResultModel(false);
              props.getWeatherData(eachOne.lat, eachOne.lon);
            }}
          >
            <div className="text-blue-600 pr-4">
              <EnvironmentOutlined />
            </div>
            <div >
              <p className="text-blue-600 text-xl">{eachOne.name}</p>
              <div className="text-blue-400 text-sm">
                <span>{eachOne.state}</span> <span>{eachOne.country}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>City data not foud.!</p>
      )}
    </Modal>
  );
};

export default SearchResult;
