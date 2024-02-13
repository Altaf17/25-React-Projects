import React, { createContext, useEffect, useState } from "react";
import featureFlagsDataServicesCall from "../data";

export const FeatureFlagsContext = createContext(null);
const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enable, setEnable] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      const response = await featureFlagsDataServicesCall();
      if (response) {
        setEnable(response);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    fetchFeatureFlags();
  });
  return (
    <FeatureFlagsContext.Provider value={{ enable, loading }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagGlobalState;
