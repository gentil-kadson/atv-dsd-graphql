package services

import (
	"encoding/json"
	"os"
	"path/filepath"

	"github.com/gentil-kadson/atv-dsd-graphql/graph/model"
)

type ProjectService struct {
	jsonPath string
}

func NewProjectService(jsonPath string) *ProjectService {
	if (jsonPath == "") {
		jsonPath = "db.json"
	}

	return &ProjectService{
		jsonPath,
	}
}

func (projectService ProjectService) GetProjects() []*model.Project {
	absPath, _ := filepath.Abs(projectService.jsonPath)
	data, err := os.ReadFile(absPath)

	if err != nil {
		panic("Couldn't read from database")
	}

	var projects []*model.Project
	err = json.Unmarshal(data, &projects)

	if err != nil {
		panic("There was an error when converting from JSON")
	}

	return projects
}

func (projectService ProjectService) AddProject(project *model.Project) error {
	projects := projectService.GetProjects()
	projects = append(projects, project)

	data, err := json.MarshalIndent(projects, "", "\t")

	if err != nil {
		panic("Couldn't add project to json")
	}
	err = os.WriteFile(projectService.jsonPath, data, 0777)

	if err != nil {
		panic("Couldn't write data to file")
	}

	return nil
}