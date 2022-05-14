#!/usr/bin/env python3

import unittest

from add_titles import update_yaml

class AddTitleTest(unittest.TestCase):

    def test_update_yaml(self):
        test_data = { "id": "1234" }
        test_file_name = "py- This Is A Test - With A Dash"
        expected = 'This Is A Test - With A Dash'
        result = update_yaml(test_data, test_file_name)['title']
        self.assertEqual(result, expected)

if __name__ == '__main__':
    unittest.main()

