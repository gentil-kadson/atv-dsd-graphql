package graph

import (
	"context"

	"github.com/gentil-kadson/atv-dsd-graphql/graph/model"
	"github.com/gentil-kadson/atv-dsd-graphql/services"
	"github.com/google/uuid"
)

var projectService services.ProjectService = *services.NewProjectService("")

func (resolver *mutationResolver) AddProject(ctx context.Context, project model.NewProject) (*model.Project, error) {
	// New projects are added through playground available at localhost index page
	uuid := uuid.New()
	newProject := model.Project{
		ID: uuid.String(),
		Name: project.Name,
		Description: project.Description,
		Technologies: project.Technologies,
		Link: project.Link,
	}
	
	projectService.AddProject(&newProject)
	return &newProject, nil
}

func (resolver *queryResolver) GetProjects(ctx context.Context) ([]*model.Project, error) {
	return projectService.GetProjects(), nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }