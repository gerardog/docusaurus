/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type {Props} from '@theme/CodeBlock/Line';
import styles from './styles.module.css';

export default function CodeBlockLine({
  line,
  highlight,
  showLineNumbers,
  getLineProps,
  getTokenProps,
}: Props): JSX.Element {
  if (line.length === 1 && line[0]!.content === '\n') {
    line[0]!.content = '';
  }

  const lineProps = getLineProps({
    line,
    ...(showLineNumbers && {className: styles.codeLine}),
  });

  if (highlight) {
    lineProps.className += ' docusaurus-highlight-code-line';
  }

  const lineTokens = line.map((token, key) => (
    <span key={key} {...getTokenProps({token, key})} />
  ));

  return (
    <span {...lineProps}>
      {showLineNumbers ? (
        <>
          <span className={styles.codeLineNumber} />
          <span className={styles.codeLineContent}>{lineTokens}</span>
        </>
      ) : (
        <>
          {lineTokens}
          <br />
        </>
      )}
    </span>
  );
}
