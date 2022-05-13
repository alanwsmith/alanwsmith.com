#!/usr/bin/env python3

# this script makes the jsx code to put
# into the index file for however many
# designs there are


total_count = 23

for counter in range(1, total_count + 1):
    print(f"import Design{counter} from './designs/{counter}/design'")


for counter in range(1, total_count + 1):
    print(f'<Design{counter} key="s{counter}" />,')


for counter in range(1, total_count + 1):
    print('<button onClick={() => switchToSample(' + str(counter) + ')}>' + str(counter) + '</button>')

