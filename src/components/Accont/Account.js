import React from 'react'
import { Button, Grid, Header, Icon, Input, Segment } from 'semantic-ui-react'
export default function Account(props) {
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" textAlign="center">{props.title}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Header size="huge" color="blue">$00.00</Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Button icon>
                    <Icon name="minus" />
                  </Button>
                  <Input type="number" />
                  <Button icon>
                    <Icon name="plus" />
                  </Button>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
