import CivitaiCard from "../components/CivitaiCard";
import Row from "../components/Row";

const ModelsPage = ({ models }) => {
    const modelsPerRow = 5; // Number of models in each row
  
    const rows = [];
    for (let i = 0; i < models.length; i += modelsPerRow) {
      rows.push(models.slice(i, i + modelsPerRow));
    }
  
    return (
      <div style={{flexDirection: 'column', padding: '10px'}}>
        {rows.map((rowModels, index) => (
          <Row key={index}>
            {rowModels.map((model) => (
              <CivitaiCard
                key={model.name}
                modelName={model.name}
                modelLink={model.civitai_page}
                image={model.image}
                downloadUrl = {model.download_url}
              />
            ))}
          </Row>
        ))}
      </div>
    );
  };
  
 
export default ModelsPage;
