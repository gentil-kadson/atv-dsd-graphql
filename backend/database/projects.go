package projects

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/gentil-kadson/atv-dsd-graphql/graph/model"
)

type ProjectsService struct {
	jsonPath string
}

func (projectService ProjectsService) GetProjects() ([]*model.Project, error) {
	data, err := os.ReadFile("./db.json")

	if err != nil {
		fmt.Println("Couldn't read from database")
	}

	var projects []*model.Project
	err = json.Unmarshal(data, &projects)

	if err != nil {
		fmt.Println("There was an error when converting from JSON")
	}

	return projects, nil
}

func (projectService ProjectsService) AddProject(project *model.Project) error {
	panic("Not implemented")
}