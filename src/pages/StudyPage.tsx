import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Study from "../types/Study";
import { fetchStudyById } from "../api/studiesService";
import { StudyComponent } from "../components/Studies/StudyComponent";

const StudyPage = () => {
  const { studyId } = useParams<{ studyId: string }>();
  const [study, setStudy] = useState<Study | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (studyId) {
      fetchStudyById(studyId)
        .then((data) => {
          setStudy(data.data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    } else {
      setError("Study ID is undefined");
      setLoading(false);
    }
  }, [studyId]);

  return <StudyComponent study={study} loading={loading} error={error} />;
};

export default StudyPage;
