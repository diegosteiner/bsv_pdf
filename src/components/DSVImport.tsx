import React, { FunctionComponent } from "react";
import { ImportTupel } from "../models/import_data";
import { parse } from "papaparse";

export interface DSVImportProps {
  onChange: (value: ImportTupel[]) => void;
}

export const DSVImport: FunctionComponent<DSVImportProps> = ({ onChange }) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    parse(event.target?.result as string, {
      delimiter: ";",
      complete: ({ data }: { data: ImportTupel[] }) => onChange(data),
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files && event.target.files[0];
    file && reader.readAsText(file, "iso88591");
  };

  return (
    <input
      type="file"
      className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
      onChange={handleChange}
    />
  );
};
