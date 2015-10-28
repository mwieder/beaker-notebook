/*
 *  Copyright 2014 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package com.twosigma.beaker.chart.treemap;

import com.twosigma.beaker.AbstractChart;
import net.sf.jtreemap.swing.TreeMapNode;

public class TreeMap extends AbstractChart {

  // root of the tree
  private TreeMapNode root = null;


  public TreeMap(final TreeMapNode root) {

    setRoot(root);
  }


  /**
   * get the root.
   *
   * @return the root
   */
  public TreeMapNode getRoot() {
    return root;
  }


  /**
   * set the new root.
   *
   * @param newRoot the new root to set
   */
  public void setRoot(final TreeMapNode newRoot) {
    root = newRoot;
  }

}
